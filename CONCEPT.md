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

## The entry program

`main.ts` copies this repository's `VIDEO.json` to the output directory —
the house reads the video itself from TikTok and scores its views; nothing
the program writes about the video counts. `VIDEO.json` names the posted
video once it is live.
