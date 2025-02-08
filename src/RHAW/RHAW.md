# AN/APR-25 Radar Homing and Warning Receiver

## Introduction

The AN/APR-25 is a Radar Warning and Homing Receiever. This is a piece of equipment which is designed to detect incoming radar and guidance signals and inform the pilot of any threats.

## Theory of Operation

### Theory of Radar

To understand the AN/APR-25 theory of operation it is important to understand the basics of radar.

![Image of Basic Radar Operation]()

The principle operation of radar is to send out a small burst of radiation (usually microwaves) in a direction and measure the time it takes to receive any reflected radiation. The speed of the radiation is known so the time can be used to estimate the distance to whatever reflected the radiation.

#### Carrier Frequency (Band)

The carrier frequency is the frequency of the radiation used for detection of objects. Each pulse contains a burst of these radiation at the carrier frequency.

![Image of Radar Pulse]()

The carrier frequency can be broadly categorised into categories known as bands. The bands for the AN/APR-25 are listed below (note these are similar to NATO bands but not exactly identical):

| BAND  | Frequency (GHz)
|-------|----------------
| India | 7 - 11
| Golf  | 4.4 - 5.8
| Echo  | 2.4 - 3.6

Whenever radar is refered to be in any of these bands it simply means that the radiation it emits falls within the limits of the band.

#### Pulse Repetition Frequency (PRF)

It is not enough to send one pulse of radiation as the energy contained within one pulse is very small so it can be difficult to detect. To improve this and to continually update what the radar is detecting the radar will send a stream of pulses. The rate at which these pulses are transmitted is known as the pulse repetition frequency.

![Image of Radar Pulse Train]()

Below the various types of pulse repetition frequency are described.


| Category | Pulse Repetition Frequency Range (kHz) | Description
|----------|----------------------------------------|-------------
| HIGH     | 30 - 300+                              | Primarily used in pulse doppler radars. Older pulse doppler radars only have high pulse repetition frequency modes. These saturate the AN/APR-25 and give a constant tone at the maximum frequency the AN/APR-25 audio generator can create.
| MEDIUM   | 3 - 30                                 | Used in modern pulse doppler radars. Medium pulse repetition frequencies are modulated this means the pulse repetition frequency is quickly varied giving them complex patterns. This can give complex digital sounding tones from the audio generator of the AN/APR-25.
| LOW      | <3                                     | Used in older pulse and moving target indicator radars. This frequency is also commonly used for ground mapping radars. Older radars use something called pulse repetition frequency jittering to reduce un-wanted clutter, this jitter is the random changing of the pulse repetition frequency and can result in a buzzing sound being heard in the AN/APR-25 audio.

The AN/APR-25 was only designed to deal with Low Pulse Repetition Frequency threats and thus only these can be correctly categorised. However because of the multiple frequencies used in medium pulse repetition frequency beat frequencies are created which can be heard in the low pulse repetition frequency range. High pulse repetition frequency radars have no such complexity and therefore they simply max the frequency of the AN/APR-25 audio generator.

### Equipement

#### Antennas

The AN/APR-25 uses four antennas to detect incoming radiation. There are two antennas on the nose to detect incoming radiation from the front half and two antennas on the tail to detect incoming radiation from the rear half.

The four antennas are angled at 45 degrees each as shown below.

![Picture of AN/APR-25 Antennas]()

Each antenna covers approximately a 90 degree cone. The relative strength between the antennas can be used to determine threat detection. Due to the antennas being fixed to the aircraft as the aircraft rolls and pitches the relative direction of the radiation will change and the apparent azimuth on the scope will change also.

#### Amplifiers

Each antenna routes to three amplifiers - one for each band that the AN/APR-25 can detect. The amplifiers increase the signal to a usable level so it can be passed to the logic analyser.

#### Logic Analysers

There is a logic analyser for each band. In general the logic analysers have complex circuitry to measure characteristics about the incoming signals.

The primary characteristics which can be measured are the pulse repetition frequency and the scan pattern of the incoming signals. If the pulse repetition frequency and scan pattern match that of the threat on this band then the respective [light](#sam-indications-bands-ige) is triggered on the billboard.

#### Audio Generator

The pulses from the amplifiers are directly translated to audio. This can result in a noisey environment when there are lots of radars operating - although the [band disable](#sam-indications-bands-ige) and [aaa defeat](#aaa-defeat) can both be used to reduce unwanted threat indications and their respective audio.

## Billboard

![Bill Board Controls Image](./img/billboard.png)

### POWER

This button switches the system on, it can take approximately 10-30 seconds (check) for the system to warm up.

### ACT/PWR

This indicates if there are any Charlie band signals detected which match that of a Fan-Song emitting guidance signals. If there is a correlated fan-song on the [Azimuth Display](#azimuth-display) the correlated signal will flash at 3 Hz.

When pressed this button does nothing.

### AAA/AI

This light illuminates when the lower half of the Echo band is triggered, this usually indicates Anti-Aircraft Artillery Fire Control Radars or E Band Airborne Intercept Radars.

### G LORO

This light illuminates when the Fan-Song E (Golf Band Fan-Song) switches to its Lobe On Receive Only, this is to counter jamming and results in the sound switching from the characteristic rattle-snake sound to a steady tone.

### AI

This indicates if there is an India band airborne intercept radar detected and what type the system has categorised.

#### AI WX

This illuminates when a radar with a connical scanning type radar is detected. This is usually indicative of an all weather fighter.

#### AI DAY

This is supposed to represent day fighters with range only radars, like that the F-100D super sabre has. However this RHAW equipement was invented before the widespread use of monopulse radars as such these more advanced radars do not trip the AI WX detection circuitry leading them to be incorrectly classified as AI DAY fighters despite having much more advanced radars.

### SAM Indications Bands (I,G,E)

#### Band Disable

Pressing the respective band button triggers the band disable circuitry. This allows the operator to remove all band indications from the scope and audio completely.

To re-enable the band simply press the button again. There is no indication that the band is disabled so take care to ensure it is set correctly so as to not miss threats.

#### Indications

The threat indications are in the form of two lights on the button, one at the top and one at the bottom. The top light indicates a high pulse repetition frequency for the given threat and the bottom light indicates the low pulse repetition frequency.

As a general rule low pulse repetition frequency is used for acquistion or long range tracking and high pulse repetition frequency is used for shorter range targeting and launch.

Each threat indication is displayed when a radar is detected which matches the pulse repetition frequency of the threat's high or low setting. However other radars can erroneously trigger the threat detection if their pulse repetition frequency coincides with the thread frequencies. 

Each threat indicated for each band are listed below. 

| Button | Band | Indicated Threat
|--------|------|------------------
| I SAM  | India| Low Blow (SA-3)
| G SAM  | Golf | Fan-Song E (SA-2)
| E SAM  | Echo | Fan-Song (early) (SA-2)

**Note currently the Echo Band Fan-Song is not present in the game as such any Echo band threat indications are erroneous.**

### LAUNCH

The launch indication is given when Charlie band guidance activity is detected and correlated to a threat fan-song which has the aircraft centered in its beam.

### AAA Defeat

This button blanks out the lower half of the Echo band effectively disabling Anti-Aircraft Artillary Radars commonly found in this band.

### Audio Knob

Sets the volume of the audio produced by the AN/APR-25

### Brightness Knob

Sets the brightness of the indications on the billboard.

## Azimuth Display



