# Parameters

Parameters can be used by DCS missions and plugins to read the internal state of the aircraft.

| Parameter Name         | Description
|------------------------|--------------
| TACAN_CHANNEL          | Number of the tacan channel, note this is only ever an X channel.
| COMM_FREQ              | Frequency of the UHF Radio in Hz
| RADIO_COMPASS_FREQ     | Frequency of the AN/ARN-6 Radio Compass in Hz
| AFTERBURNER_STATE      | 0 for unlit -> 1 for AB lit (note if there is AB failure it will not indicate desired AB only the actual AB state ie unlit)
| ENGINE_RPM             | 0 -> 100, engine rpm in percent
| FLAP_STATE             | 0 -> 1, average position where 0 is flaps retracted and 1 fully extended
| GEAR_STATE             | 0 -> 1, average position where 0 is gear retracted and 1 fully extended
| TRANSPONDER_CODE       | Transponder Code given for Mode 3 code given as a number, 0 if the IFF is not able to respond (off or in standby).
| GUN_MISSILE_SWITCH     | Position of the Gun/Missile Switch with positions: MISSILES (0), SAFE (1), UPPER (2),ALL (3), LWR (4), POD (5)
| MODE_SELECT_SWITCH     | Position of the Mode Selector with positions OFF (0), SIGHT & RADAR (1), MANUAL (2), LABS (3), LABS ALT (4), LADD (5)
| ARMAMENT_SELECT_SWITCH | Position of Armament Selector with positions OFF (0), RKTS (1), BOMBS (2), DISP (3), NAPALM (4), SPL STORES (5), INOP/SHRIKE (6), TANK JETT (7), DISP JETT (8), PYLON JETT (9)
