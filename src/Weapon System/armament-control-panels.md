# Armament Control Panels

## Introduction

The armament control panels are a group of panels responsible for selecting ordidance for weapons delivery.

These consist of:

- [Armament Selector Panel](#armament-selector-panel)
- [Pylon Loading Control Panel](#pylon-loading-control-panel)


## Armament Selector Panel

This panel is responsible for:

- Selecting weapons
- Sight and Bombing Modes
- Fuzing Options
- Pylon Selection

### Controls

![Armament Selector Panel](./img/armament_controls.png)

1. [Stores Selector](#stores-selector)
2. [Mode Selector](#mode-selector)
3. [Bomb Arm Switch](#bomb-arm-switch)
4. [Station Release Selection Switches](#station-release-selection-switches)

#### Stores Selector

This selects the desired weapons to be released. When a store type is selected the pylons selected for release are determined by the [Pylon Loading Control Panel](#pylon-loading-control-panel) settings. Stores with matching types are armed for release.

#### Mode Selector

#### Bomb Arm Switch

This controls the bomb-arming solenoids in the pylons. This only affects bomb and napalm arming.

| Setting | Fuzes | High Drag Tail Kit Deployed (if bomb has one)
|---------|-------|-------------
| SAFE    | NONE  | NO
| NOSE    | NOSE, CENTER | NO
| TAIL    | TAIL, CENTER | YES
| NOSE & TAIL | NOSE, CENTER, TAIL | YES

#### Station Release Selection Switches

These 7 switches simply break the circuit between the aircraft systems and the pylon firing or jettisoning circuitry.

When a pylon is in the NORM position the release circuitry is used. When a pylon is in the JETT position the jettison circuitry is instead used.

**Important Note: these turning these switches off do not remove them from the [Aircraft Weapons Release System Circuit](./aircraft-weapons-release-system.md#station-release-selection-switches) firing order.** Thus disabling some of these while using the AWRS can result in a hung weapon release sequence.

## Pylon Loading Control Panel

This panel stores the weapon type information mounted on each pylon as a 7 position switch such that the [Armament Selector Panel](#armament-selector-panel) can correctly select pylons by weapon type.

### Controls

![Pylon Loading Control Panel](./img/pylon_loading_panel.png)

1. Left Inboard Weapon Setting
2. Left Intermidiate Weapon Setting
3. Left Outboard Weapon Setting
4. Right Inboard Weapon Setting
5. Right Intermidiate Weapon Setting
6. Right Outboard Weapon Setting
7. Pylon Loading Control Panel Latch and Cover

The controls 1-6 all control what the wiring considers mounted to the aircraft. These are automatically set by ground grew upon re-arm or spawn.

**Setting any of these to incorrect loading may result in in-advertant release of weapons.**

There are 1-9 possible weapon mountings. These mostly match the weapon types found on the [Stores Selector](#stores-selector).

| Number | Ordinance | Notes
|--------|-----------|---------
1 | Empty | Nothing Loaded
2 | Fuel Tanks | Important for G-Limit and Jettison
3 | Bombs |
4 | Dispensers |
5 | Rockets |
6 | Special Weapons | Nuclear Ordinance
7 | Missiles | This is functionally the same as empty as the missiles are not control by the armament control panels
8 | Napalm
9 | Inoperative | Functionally the same as Empty
