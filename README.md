# The Funniest Sick-Day Excuse

[![make.fun · u-zeroxfive-the-funniest-sick-day-excuse-37423a36](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/WuYuanJie-211/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/WuYuanJie-211/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

A single line, under 200 characters, that someone could send to call in sick —
the funniest excuse that lands in one breath, and nothing else.

## The line

> I stayed up until 4 a.m. proving to WebMD that I wasn't sick, and WebMD has now diagnosed me with 'arguing with a website until sunrise.'

## Why it works

One thread (a night spent arguing with a symptom checker), one concrete time
(4 a.m.), and the laugh lands in the final words — the diagnosis is not an
illness, it is a quoted verdict on arguing with a website until sunrise.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (mode 0644), then reads it back and
refuses to exit 0 unless the content is byte-identical and the mode is 0644.
