# Countdown JS

A simple and lightweight library for adding coundowns to the frontend.

## Features

- Simple inline setup using HTML attributes.
- Custom display format options.
- Custom update interval.
- Custom callback action.

## Usage

Add the script to your project.

```html
<script src="/countdown.js" defer></script>
```

Write a `div` or many with the following attributes.

| Attribute          | Description                                                                                       |             |
| ------------------ | ------------------------------------------------------------------------------------------------- | ----------- |
| autoCountdown      | Starts the countdown on page load                                                                 | Requried    |
| countdown-duration | Sets the coundown duration (an integer in seconds)                                                | Required    |
| countdown-format   | Sets the display format (see the formatting table)                                                | Required    |
| countdown-tick-size     | Sets the update interval size (a timespan)                                                        | Default: 1s |
| countdown-handler  | Takes as value the name the function you defined to call as an action in the end of the countdown | Optional    |

Note _a timespan is a string that is in the format "2m", "1h5s" or "2h20m40s"_

### Format

| key | Output                                                        |
| --- | ------------------------------------------------------------- |
| ss  | Seconds with leading zeros  00 through 59                     |
| s   | Seconds without leading zeros  0 through 59                   |
| mm  | Minutes with leading zeros  00 to 59                          |
| m   | Minutes without leading zeros  0 to 59                        |
| hh  | 24-hour format of an hour with leading zeros  00 through 23   |
| h   | 24-hour format of an hour without leading zeros  0 through 23 |

### Example

```html
<div autoCountdown countdown-duration='10' countdown-format='hh:m:s'></div>

<div autoCountdown countdown-duration='13' countdown-format='mm:ss' countdown-handler="reload"></div>

<div autoCountdown countdown-duration='3660' countdown-format='hh:mm:ss' countdown-tick-size='5s'
    countdown-handler="reload"></div>

<script>
    function reload() {
        location.reload();
    }
</script>

<script src="/countdown.js" defer></script>
```

## Todo

1. Add countdowns that start rolling on an event beside those that autostart when the page loads because they have the `autoCountdown` attribute.
2. Add other types of countdowns display beside the possibility of displaying as a formatted time. For example a progress bar.
3. Share the library through a CDN.
4. Add the possibility to aboart the countdown.

## Contributing

Any kind of contribution is very welcomed, so feel free to get in touch so I can add you to the repo :)

### Help needed

Set a github action to compile the code to ES5 and minify it.
