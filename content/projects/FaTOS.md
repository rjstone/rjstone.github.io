---
title: 'FaTOS: The Fake-Time Operating System'
author: Robert Stone
startDate: 2025-05-25
draft: true
tags:
  - embedded
  - stc-mcu
---

## What's a "fake time" operating system?

Some very small microcontrollers, like the STC89 series (an Intel 8052 clone), don't really have all of the modern resources and interrupt handling that you might want for a real operating system, but at least they do have more than one timer and a few bytes of RAM. So they can be used for various things involving timing, like directly driving seven-segment LED displays or IR LEDs.

Normally this is just done in the most bare-metal fashion by directly configuring timer control registers, setting up interrupts and ISRs (interrupt service routines), and otherwise doing everything the old fashioned way. After all, these things are kind of short on program storage and RAM.

But in the spirit of things like Arduino, I figured it might be nice to have some sort of framework to make things a little nicer.

But since these kinds of MCUs are not exactly modern SoCs like the ESP32, nor are they as capable as an ARM Cortex-M0, such an "OS" will be necessarily limited. Still, as a sort of experiment, I decided I'd try to find out what could be done.

1. If nothing else, functions can be scheduled for execution at particular times sort of like `cron` jobs on a chip.
1. It's easy to repeatedly call them at intervals rather than one-time.
1. They don't need to be called directly from inside interrupt handlers.
1. Sure, one function could just steal the one-and-only execution thread, or run for too long, but that's avoidable much of the time and it's not like any of them will be provided by third-parties anyway.
1. But the timing won't be extremely precise or guaranteed.

While not perfect, this sort of "fake time" cooperative scheduler management could still be useful, and should make things easier than trying to do everything with nothing but special function registers.

## The First Target: STC89C52RC from STC

The STC microcontrollers in this family are enhanced clones of the Intel 8051 MCU from the 1980s. These are not so popular in the West anymore but they still seem to get used in Asia for whatever reason.

The STC89 series is considered obsolete by STC and I don't think they're even making any more of them, but if you like to buy inexpensive "soldering practice kits" and maybe a surplus educational development board from China every once in a while, you could easily end up with some.

Some of these kits used to comw with 8051 Atmel chips using very similar model numbers, but at some point almost all of those disappeared and were replaced by compatible STC MCUs. This is probably because these sorts of low-spec kits (which often come with no directions, schematics, or anything) seem to be put together using whatever someone gets the best deal on at the moment.

So getting something with not just an 8051 clone, but an obsolete one at that, isn't too surprising in this situation. Yet, at the same time, it presents an interesting opportunity to see what you can do with completely random surplus parts from China.

If you can program these then you can probably program anything (as long as it's not locked or OTP, one-time-programmable, which the cheapest MCUs are).

Also, the fact that the STC89 is about the lowest capability 8051 clone I've seen means that if something works on this it should work on any of the newer, faster, 8051 clones with more resources and such (like the newer in-production STC chips of the same family).

## To be contunued....
