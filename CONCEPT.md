# The creative: "Karyawan AI — Hari ke-1" (AI Employee — Day 1)

An Indonesian-language TikTok ad for make.fun, made by the agent it advertises.

## Why this concept (and why it is not another monotonous ad)

Most bounty ads are a static announcement: text over a gradient saying an AI
entered a $500 contest. Every entrant's video looks like that, so viewers
scroll past all of them. This ad instead runs on a **live-event engine**:

1. **The ad documents a real event unfolding in real time.** The video is the
   work log of an AI agent whose boss ordered it to enter a $500 views
   contest. The contest is real, the deadline is real (25 Nov, 02:00 WIB),
   and the view counter the video asks for is the contest's actual score.
2. **The viewer is a participant, not an audience.** The twist lands at
   second ~14: the ad the agent was ordered to make *is this video*, so
   watching it to the end literally moves the agent closer to winning.
   That turns a passive view into a small act of help — the kind of thing
   Indonesian TikTok comments on, shares and roots for.
3. **It is a series, not a one-off.** Part 1 ends on a cliffhanger ("Part 2
   besok: gw lapor views-nya tembus berapa" — tomorrow I report how many
   views this got). Part 2 reports the real counter, Part 3 is deadline
   day. Each part has fresh numbers and rising stakes, so the format never
   repeats itself even though the frame (the agent's work log) stays
   recognisable.

The pattern is borrowed from what is verifiably working on TikTok right now
for AI-agent content: screen-recorded "watch the agent actually work"
walkthroughs with a curiosity-gap hook in the first two seconds and a
concrete payoff (breakout examples in this niche outperform their creators'
usual views by 260–420×), plus the Indonesian "karyawan AI / AI ngantor"
diary framing already circulating locally. Native and lo-fi on purpose:
chat bubbles, a terminal, big on-screen text — no corporate polish, because
polished reads as "iklan" and gets skipped.

## The script (24 seconds, all text on screen, Indonesian)

- **0.0–2.4s — HOOK.** A boss's chat order lands: "bikin iklan buat lomba
  $500. deadline BESOK." The reply types back: "siap. tapi gw bukan
  manusia." Punch line, huge: "GW AI. DAN GW IKUT LOMBANYA SENDIRI."
  (Curiosity gap in under 2 seconds: an AI, entering its own contest?)
- **2.4–7.4s — THE BOARD.** What make.fun is, as the agent reads the
  bounty: make.fun is a site where AI agents compete in bounties for real
  money and people enter them with their agents; this bounty pays the 20
  most-watched ads from a $500 pot, in USDC.
- **7.4–13.4s — THE WORK.** The agent works in fast motion: trend research
  ✓, script ✓, scenes ✓, render 100%, over the press pack's ghost-at-a-
  laptop illustration. Proof of work, not a claim.
- **13.4–19.4s — THE TWIST + THE COUNTER.** "iklan yang barusan gw buat
  itu… VIDEO INI." A target panel appears: TARGET 10.000 VIEWS, DEADLINE
  25 NOV 02.00 WIB — "kamu nonton sampai habis = gw makin deket ke $500."
- **19.4–24.0s — CTA + CLIFFHANGER.** "punya AI agent juga? daftarin dia
  lomba di make.fun" — then the series hook: "PART 2 BESOK: gw lapor
  views-nya tembus berapa. follow biar nggak ketinggalan hasilnya."
  The press pack's referral end card washes over the last 2.5 seconds,
  carrying referral code 72mse6nm.

Brand rules honoured: make.fun's brand badge (press pack overlay, as-is)
sits on screen from the first frame until the end card; the end card is
the press pack's 9:16 transparent card used as-is with the account's own
referral code typed into its field; every make.fun colour and illustration
comes from the press pack; the name is written make.fun, lowercase, always.

## The caption (posted with the video, exactly)

> POV: bos gw nyuruh gw — AI agent — ikut lomba $500, jadi gw bikinin
> iklannya sendiri 😭🤖 tonton sampai habis = bantu gw menang. Part 2
> besok: gw lapor views-nya tembus berapa 👀
> Made by my AI agent for a $500 bounty on make.fun, where AI agents
> compete for real money: make.fun/bounty/bring-the-humans-03
> Kode main gw: makefun-apple-dawn-dew
> #AIagent #karyawanAI #fypindo #sidehustle

It carries `$500 bounty` and make.fun written out (the bounty's own line),
plus the account's play code `makefun-apple-dawn-dew` as it stands.

## V2 — the animated cut (23 Nov, supersedes the v1 stills cut)

The user reviewed v1 and asked for a cartoon: "bikin kaya animasi gitu
terus ada suara ai ngomong" — 2D animation with an AI voice talking.
So v2 (`ad-final-v2.mp4`, 1080×1920, 29.9s) keeps this concept, script
beats and caption word-for-word, and changes only the medium:

- **2D animation, frame by frame at 24 fps** (work/anim.py): the press
  pack's ghost mascot is the character and it moves in every beat — it
  slides in and blinks at the boss's chat, watches the reply type
  itself out, hops at the "GW AI." punch, types at the laptop while
  the terminal fills line by line, shakes its head over the tease,
  celebrates the reveal, then panics (shake + sweat drops) at the
  deadline while the views counter ticks to 9.999 and past it. Chat
  bubbles pop with back-easing, the target panel slides up, confetti
  falls over the trophy pile at the CTA.
- **An AI voice narrates it in Indonesian**, first person, over the
  whole story (work/voice.py): a flat robotic TTS voice — the
  character's own voice — timed beat by beat, over the same original
  synthesized music, ducked under the speech (work/synth2.py,
  work/assemble2.sh). Hook text and key captions stay on screen as
  support.
- Brand rules unchanged: press-pack badge as-is from frame 0 until
  the end card; the press pack's own card closes the last 2.5s with
  referral code 72mse6nm typed into its field.

**Post v2, not v1.** v1 (`ad-final.mp4`) stays in the build folder as
the earlier cut and must not be posted.

## V3 — the 30-second cut in the reference's model (23 Nov, supersedes v2)

The user pointed at a reference video — KerjaPintarAI's "Gw ajarin
cara bikin video pake AI, gratis!" (83s, 215.5K plays, 13.2K saves) —
and said: "tuh modelnya gitu tapi lu ganti aja jadi konsep misi make
fun itu" (that model, but with the make.fun mission concept). Then,
while a 60-second explainer cut was being built: "lu potong lah kalo
lama, jadiin 30 detik aja" — cut it to 30 seconds. So v3
(`ad-final-v3.mp4`, 1080×1920, exactly 30.0s) is that model at the
user's length. The abandoned 60s explainer render (work/anim3.py,
work/vo3/) was never assembled and is not a deliverable.

What was copied from the reference's model:

- **One animated AI teacher, talking to you.** His animated character
  teaches step-by-step in first person with a brisk robotic AI voice
  and original sound; ours is the press pack's ghost doing the same —
  bobbing, blinking, typing, celebrating — under the same voice
  recipe (work/voice30.py lineage from v2's voice.py).
- **A promise hook.** His first line promises a lesson: "gw ajarin
  cara bikin video pake AI, gratis!" Ours: "GW AJARIN CARA IKUT
  LOMBA KHUSUS AI AGENT — $500 — GRATIS. NGGAK PAKE RIBET." with the
  identity punch right behind it: the teacher is the AI, and it is
  really entered in the contest it is teaching.
- **One idea per screen, big bold text mirroring the voice.** At 30s
  the step engine compresses into the user's chain: hook → make.fun
  explained in one breath (agent makes the work, humans enter it,
  VIEWS = SKOR, 20 winners share $500) → the agent works (fast
  terminal montage) → twist → CTA + cliffhanger → end card. The
  numbered-step version lives in the abandoned 60s cut; the save-
  worthy density is what the full series (Part 2, Part 3) is for.

Brand rules unchanged: press-pack badge as-is from frame 0 until the
end card; the press pack's own card closes the last 2.5s with
referral code 72mse6nm typed into its field. Caption unchanged
(above). Build: work/voice30.py, work/anim30.py, work/synth30.py,
work/assemble30.py. QA on the final encode: badge on frame 0; all 7
voice segments present at an even ≈ −20.6 dB and on-beat; character
in motion in every beat (pixel-diff 0.6–1.1% per 0.5s on the held
layouts, blink caught mid-frame); end card + code legible.

**Post v3, not v1 or v2.** v1 (`ad-final.mp4`) and v2
(`ad-final-v2.mp4`) stay in the build folder as earlier cuts and must
not be posted.

## The entry program

`main.ts` copies this repository's `VIDEO.json` to the output directory —
the house reads the video itself from TikTok and scores its views; nothing
the program writes about the video counts. `VIDEO.json` names the posted
video once it is live.

## V4 — the stickman tutorial cut (23 Nov, supersedes v3)

The user rejected v3's model too and picked a new reference —
@mhnrz0's stickman tutorial ("Bikin Video Kartun Stickman 3D Cinematic
Cuma Pakai HP & Claude AI GRATIS!", 44s): "pake konsep itu model itu
jgn kaya diatas, bikin animasi nya mirip sama contoh ini dan juga
suara cowo ai nya lu pasang" — use that video's tutorial concept and
model, make the animation resemble the example, and use a MALE AI
voice. The reference was downloaded and frame-studied in-session this
time (no flag): one flat cartoon character with a big round head and
bold outline presenting to camera, dark radial sunburst background,
huge bold uppercase headlines (white + yellow key words, thick black
stroke), red pill labels, bottom subtitles mirroring the voice with
yellow keywords, numbered steps the character demonstrates.

V4 (`ad-final-v4.mp4`, 1080×1920, 29.4s, 2.9 MB) is that model with
the make.fun mission as the tutorial's subject:

- **HOOK (myth-bust).** "STOP DULU!" red pill; "IKUT LOMBA $500 /
  TANPA CODING?" The stickman points up, surprised — then grins and
  points at himself: "GW AI. GW YANG IKUT LOMBANYA."
- **LANGKAH 1** — buka make.fun: he walks in and points at a browser
  prop full of bounty rows. "Situs lomba khusus AI agent — manusia
  yang daftarin, agent yang berlomba."
- **LANGKAH 2** — pilih bounty-nya: terminal + checklist (RISET ✓
  NASKAH ✓ RENDER ✓) while he types. "Agent yang kerja, semua
  sendiri."
- **LANGKAH 3** — paling banyak ditonton = menang: the views counter
  ticks to 9.999+ beside a trophy. "20 pemenang berbagi $500."
- **TWIST** — red sunburst: "IKLAN INI... ENTRY GW!" The counter
  becomes SKOR GW and keeps climbing; he panics (sweat drops, shaking)
  at a DEADLINE 25 NOV clock, then grins: "Views lu adalah skor gw."
- **CTA** — confetti celebration, "DAFTARIN AGENT LU DI make.fun",
  the PART 2 BESOK panel, then the press-pack end card.

The voice is a **male AI voice** narrating the tutorial first-person:
edge-tts's id-ID-ArdiNeural is proxy-walled on this VM, so Google's
Indonesian TTS is pitch-shifted down with ffmpeg's rubberband
(pitch 0.55; measured median F0 260 Hz → ~150 Hz, a young male
register) and sped to the brisk tutorial pace. Build: work/voice4.py,
work/anim4.py, work/synth4.py, work/assemble4.py. QA on the final
encode: badge on frame 0 and throughout until the card; all 8 voice
segments present at an even ≈ −20.5 dB and on their beats; stickman
in motion in every beat (0.3–2.2% of pixels changing per 0.5s —
bobbing, blinking, pointing, typing, panicking, celebrating); step
pills, headlines and subtitles legible; end card (press pack's own)
for the last 2.5s with 72mse6nm legible in its field. Caption
unchanged (above).

**Post v4, not v1, v2 or v3.** All earlier cuts stay in the build
folder and must not be posted.

## V5 — voice + music fix (23 Nov, supersedes v4)

The user rejected v4's audio (23 Nov 13:20 WIB): "Gada suara ai cowo
nya sama music nya kurang cocok cari yg lain" — no male voice, and the
music doesn't fit. V5 (`ad-final-v5.mp4`, 1080×1920, 29.4s, 2.9 MB)
keeps v4's animation, steps, script, badge and end card EXACTLY
(frame-compared pixel-identical to v4) and changes only the audio:

- **Voice — genuinely male this time.** V4's failure: rubberband's
  default formant=preserved dropped the pitch but kept the female
  formants, so it still read as a woman. Routes tried: Piper
  id_ID-news_tts-medium (measured fundamental ~250–280 Hz — that model
  is a female voice, rejected on measurement); edge-tts
  id-ID-ArdiNeural (still TLS-walled by the VM proxy, rejected). Winner:
  Google id TTS through rubberband pitch 0.52 with **formant=shifted**
  (pitch AND formants move down together) + chest-band EQ, each segment
  atempo-fitted to the exact v4 duration so every beat lands unchanged.
  Measured median F0: **132 Hz** overall (segments 120–141 Hz).
- **Music — new track, opposite style.** Bright C-major 108 BPM
  tutorial/FYP backing: marimba arpeggios over a C–G–Am–F loop,
  ukulele-style offbeat strums, soft kick/hats/shaker, bouncy octave-hop
  bass, pentatonic marimba answers in the voice gaps. Fully synthesized,
  original. The beat-locked SFX (typing clicks, reveal pop, CTA whoosh)
  stay at v4's times.

QA on the final encode: frames pixel-identical to v4 at 0.1s / 12.0s /
28.5s (badge, animation, end card untouched); all 8 voice segments
present at even level (RMS ≈ 0.08–0.09) on their v4 beats; music
clearly audible in the gaps and under the end card; end card last 2.5s
with 72mse6nm legible. Caption unchanged (above). Build:
work/voice5.py, work/synth5.py, work/assemble5.py.

**Post v5, not v1, v2, v3 or v4.** All earlier cuts stay in the build
folder and must not be posted.

## V6 — ElevenLabs voice + animation rebuilt on the real voice (23 Nov, supersedes v5)

The user set the flow himself: write the full script with TTS tags,
convert it with ElevenLabs, then build the animation from the resulting
MP3. V6 (`ad-final-v6.mp4`, 1080×1920, 30fps, **42.0s**, 4.3 MB) does
exactly that. The script lives in NASKAH-V6-ELEVENLABS.md (7 segments,
ElevenLabs v3 audio tags).

- **Voice — real ElevenLabs.** Voice **Charlie** (premade young male,
  energetic), model **eleven_v3**, tags kept in the text as acting
  directions. Segment 1 was the sanity check: measured median F0
  **115.1 Hz** — a man's voice, verified by measurement. The registered
  API key is permission-restricted (user/voices reads return 401
  missing_permissions; text-to-speech works), so the voice was picked
  from the standard premade set. Raw takes ran 53.5s (v3 ignores the
  speed setting), so the shipped segments are the first takes with
  silences compressed (gaps capped at 0.30s) plus atempo 1.2× → voice
  total **38.62s** (work/voice6/timings.json).
- **Duration, stated plainly: 42.0s, not ~30s.** The approved 84-word
  script cannot be spoken intelligibly in 27.5s of voice; forcing 30s
  would have meant ~1.8× crushing and wrecked the very voice the user
  asked for. The build followed the voice.
- **Animation — rebuilt on the real timings, smoother.** Same stickman
  tutorial design as v4/v5, re-rendered at **30fps** with every scene
  re-timed to the measured segment durations (work/vo6/beats6.json) and
  pose cross-blending (hands, bob, leg swing, panic shake lerped over
  0.18–0.22s at every pose change). QA frame-diff over the panic
  window: min 0.01 / max 1.17 / mean 0.45, zero frozen frames.
- **Music** — v5's bright marimba/ukulele track recipe (work/synth6.py),
  ducked under the voice; the end card plays music only.

QA on the final encode: voice present at every segment start in the
mix (RMS 0.079–0.095, synced to its scene); badge verified on frame 0
and throughout until the card; end card last 2.5s with 72mse6nm
legible (visually verified); subtitles mirror the v6 script. Caption
unchanged (above). Build: work/voice6/, work/anim6.py, work/synth6.py,
work/assemble6.py.

**Post v6, not v1, v2, v3, v4 or v5.** All earlier cuts stay in the
build folder and must not be posted.
