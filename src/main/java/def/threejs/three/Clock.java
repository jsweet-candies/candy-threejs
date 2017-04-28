package def.threejs.three;
/**
     * Object for keeping track of time.
     *
     * @see <a href="https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js">src/core/Clock.js</a>
     */
public class Clock extends def.js.Object {
    /**
         * @param autoStart Automatically start the clock.
         */
    public Clock(Boolean autoStart){}
    /**
         * If set, starts the clock automatically when the first update is called.
         */
    public Boolean autoStart;
    /**
         * When the clock is running, It holds the starttime of the clock.
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
    public double startTime;
    /**
         * When the clock is running, It holds the previous time from a update.
         * This counted from the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
         */
    public double oldTime;
    /**
         * When the clock is running, It holds the time elapsed between the start of the clock to the previous update.
         * This parameter is in seconds of three decimal places.
         */
    public double elapsedTime;
    /**
         * This property keeps track whether the clock is running or not.
         */
    public Boolean running;
    /**
         * Starts clock.
         */
    native public void start();
    /**
         * Stops clock.
         */
    native public void stop();
    /**
         * Get the seconds passed since the clock started.
         */
    native public double getElapsedTime();
    /**
         * Get the seconds passed since the last call to this method.
         */
    native public double getDelta();
    /**
         * @param autoStart Automatically start the clock.
         */
    public Clock(){}
}

