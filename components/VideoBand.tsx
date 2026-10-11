"use client";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

/*
 * Full-width, muted, looping background video streamed from YouTube (Odoo's official channel).
 * Nothing is downloaded or re-hosted. A poster frame covers the player until YouTube reports
 * that playback has started, so visitors never see the YouTube play button or title bar;
 * if a browser blocks autoplay, the poster simply stays.
 */
const VIDEO_ID = "OzUnamGdcQg";

type YTPlayer = { mute(): void; playVideo(): void; destroy(): void; unloadModule?: (m: string) => void; setOption?: (m: string, k: string, v: unknown) => void };

/* YouTube honours a viewer's "always show captions" preference and loads captions a few
   seconds after playback starts, so they are switched off on every API change, not once. */
function noCaptions(p: YTPlayer) {
  try { p.setOption?.("captions", "track", {}); p.setOption?.("cc", "track", {}); } catch {}
  try { p.unloadModule?.("captions"); p.unloadModule?.("cc"); } catch {}
}
declare global {
  interface Window {
    YT?: { Player: new (el: HTMLElement, opts: unknown) => YTPlayer; PlayerState: { PLAYING: number; ENDED: number } };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadApi(): Promise<void> {
  return new Promise((resolve) => {
    if (window.YT?.Player) return resolve();
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev?.(); resolve(); };
    if (!document.getElementById("yt-iframe-api")) {
      const s = document.createElement("script");
      s.id = "yt-iframe-api";
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }
  });
}

export function VideoBand({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const host = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let player: YTPlayer | null = null;
    let cancelled = false;
    loadApi().then(() => {
      if (cancelled || !host.current || !window.YT) return;
      player = new window.YT.Player(host.current, {
        host: "https://www.youtube-nocookie.com",
        videoId: VIDEO_ID,
        playerVars: { autoplay: 1, mute: 1, loop: 1, playlist: VIDEO_ID, controls: 0, disablekb: 1, modestbranding: 1, playsinline: 1, rel: 0, iv_load_policy: 3, fs: 0, cc_load_policy: 0, cc_lang_pref: "xx", hl: locale },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            noCaptions(e.target); e.target.mute(); e.target.playVideo();
            // belt and braces for the first seconds, when YouTube attaches the caption track
            let n = 0; const id = window.setInterval(() => { noCaptions(e.target); if (++n > 20) window.clearInterval(id); }, 1000);
          },
          onApiChange: (e: { target: YTPlayer }) => noCaptions(e.target),
          onStateChange: (e: { data: number; target: YTPlayer }) => {
            if (e.data === window.YT!.PlayerState.PLAYING) { noCaptions(e.target); setTimeout(() => setPlaying(true), 3200); }
            if (e.data === window.YT!.PlayerState.ENDED) { noCaptions(e.target); e.target.playVideo(); }
          },
        },
      });
    });
    return () => { cancelled = true; player?.destroy(); };
  }, []);

  return (
    <figure className="video-wrap">
      <section className="video-band" aria-label={ar ? "فيديو Odoo" : "Odoo video"}>
        <div className="video-band-frame" aria-hidden="true"><div ref={host} /></div>
        <img className={`video-band-poster ${playing ? "hidden-poster" : ""}`} src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`} alt="" aria-hidden="true" />
      </section>
      <figcaption className="video-caption">{ar ? "نظام واحد لكل أعمالك. هذا ما نطبّقه لك." : "One system for your whole business. This is what we implement for you."}</figcaption>
    </figure>
  );
}
