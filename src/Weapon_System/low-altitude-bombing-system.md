# AN/AJB-1 Low Altitude Bombing System (LABS)

## Introduction

The Low Altitude Bombing System (LABS) was introduced to assist with nuclear weapons delivery, providing a pre-determined trajectory with delivery profiles to assist with escaping blast effects.

## Controls and Indicators
![labs](./img/labs.png)

### Pullup Light

Illuminates when LABS is active before the pullup. Once pullup occurs, this light extinguishes.

### Roll Indicator

Indicates the desired roll by the system.

### Pitch Indicator

- In pre-pullup mode, indicates desired pitch angle 
- In pullup mode, indicates desired G load

## Operation

LABS delivery modes share a pullup timer. The pullup timer is set by the pilot, indicating time taken for the aircraft to fly from a known identification point (IP) to the pullup point.

The pullup timer is determined by:

- Ground speed
- Bomb travel distance
- Distance from IP to target

`pullup timer = (distance from IP to target - bomb travel distance) / ground speed`

Both ground speed and distance from IP to target are determined during mission planning. A good identification point (IP) is something near the target area the pilot can easily locate and navigate to.

Bomb travel distance is determined by the bomb's release parameters, including:

- Release angle
- True airspeed
- Target altitude
- Aircraft altitude
- Bomb type
- Wind

### LABS (Loft)

The LABS mode is the normal mode, lofting the bomb towards the target over long distances, at a release angle of 50 degrees.

### LABS ALT (Over the Shoulder)

The LABS ALT mode is the alternate method lofts the bomb vertically over the target, at a release angle of 120 degrees.

![Image of Loft Release](./img/labs_loft_delivery.png)

### Low Altitude Drogue Delivery (LADD)

Low Altitude Drogue Delivery (LADD) is for delivery drogue assisted nuclear weapons. At the pullup point, the pilot is commanded into a 40 degree climb. The release timer determines the release. The release timer begins at the pullup point. When the timer runs out, the bomb is released.
