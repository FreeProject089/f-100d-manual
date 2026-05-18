# Instrument Panel
The insturment panel of the F-100D contains a careful selection of essential gauges for basic operation, navigation, and system monitoring. All gauges suffer from installation error and other errors as a result of wear and tear. During the time period, it was not uncommon to leave a majority of the aircraft's gauges unmaintained. Thus, the pilot will notice frictional spikes and slight reading errors of which are modeled in the DCS: F-100D Super Sabre.

In this section, the primary flight insturments needed for basic operation of the aircraft will be discussed. For more in depth coverege, please visit the respective system's section.

## Airspeed and Mach Indicator
![replace image](./img/replace-image.PNG) <!-- REPLACE THIS IMAGE -->

The aircraft's air data computer (ADC) computes the velocity based on temperature and pressure signals recieved by the pitot-static system. Speicifcally, it takes the difference between measured total and static pressure to compute dynamic pressure. Loss of either the pitot tube or static ports will manifest in innaccurate airspeed readings. 

The airspeed indicator also introduces installation and position errors wich will introduce errors in readings of up to 10 knots.

The Mach number is computed in the same manner to display the aircraft's velocity as a multiple of the speed of sound at the local pressure altitude.

These two readings are displayed as a combined Airspeed and Mach indicator. The inner reading displays the Airspeed between x to x and the outer reading displays the Mach number between x to x. An index marker, set by the pilot, can also be used via a push-and-rotate actuation of the index knob.

## Wet Magnetic Compass
![replace image](./img/replace-image.PNG) <!-- REPLACE THIS IMAGE -->

Although not neccisarily a primary flight instument, the wet magnetic compass can be used during system failures that degrade the heading indicators operation. 

The compass will lag in the northern hemisphere when turning from north and lead turning towards north. In the southern hemisphere the pilot will observe the opposite behavior. For accelerations in the northen hemisphere the compass will turn north and in the southern hemisphere the compass will turn south. The opposite is true for deccelerations.

The compass card can tilt slightly; however, if the compass is not perfectly level with the magnetic field of earth, error is introduced. Unfortunatley, the misalignment error is almost always a factor in readings.


## Attitude Indicator
One of the most important insturments is the attitude indicator. Driven by a an electric motor, a double mounted gyro maintains its vertical uprighta alignment while the aircraft maneuvers. However, the indicator is subject to percession errors, but is re-alignes with a self-erecting mechanism. 

A knob provides the pilot ability to adjust the reference up and down to align the it with the displayed artificial horizon.

## Turn and Slip Indicator
A standard turn and slip indicator provides turn direction and rate information via a vertical needle. A standard 4 minute insturment turn places the vertical turn needle over the the corresponding direction's hash mark. 

The slip indicator displays horizontal accelertations in the lateral plane with a slip ball. For coordinated turns, use a combination of the rudder and the aircraft's yaw damper to center the slip ball.

## Accelerometer
An accelerometer measures the aircrafts G load in the normal axis. The accelerometer has 3 needles: one for maximum positive G load, one for maximum negative G load, and one for current G load. To reset, use the push-to-reset knob which will zeroize the maximum and minimum G load needles.

## Altimeter
The altimeter displays the static system's current reading corrected for non standard temperature set by the pilot via a rotate actuation on the Altimeter's pressure setting knob. The current pressure setting is displayed in the Kollsman's window and is usually set to the local sea-level pressure in inches of mercury. Correct application of the local sea-level pressure setting will display the aircraft's mean-sea-level altitude on the altimeter.

## Vertical Velocity Indicator
The vertical velocity indicator computes the aircrafts vertical velocity, in feet per minute, via static pressure signals from the ADC. Lag is an inherent consequence of the design of the indicator and can result in readings often delayed up to 6 seconds. Much like the airspeed indicator, the vertical velocity indicator sufferes from substantial positional and gauge installation errors and can often read up to 500 feet per minute.

![replace image](./img/dash.PNG) <!-- REPLACE THIS IMAGE -->
