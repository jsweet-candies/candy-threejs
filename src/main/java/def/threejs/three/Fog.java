package def.threejs.three;
/**
     * This class contains the parameters that define linear fog, i.e., that grows linearly denser with the distance.
     */
public class Fog extends IFog {
    public Fog(double hex, double near, double far){}
    public String name;
    /**
         * Fog color.
         */
    public Color color;
    /**
         * The minimum distance to start applying fog. Objects that are less than 'near' units from the active camera won't be affected by fog.
         */
    public double near;
    /**
         * The maximum distance at which fog stops being calculated and applied. Objects that are more than 'far' units away from the active camera won't be affected by fog.
         * Default is 1000.
         */
    public double far;
    @jsweet.lang.Name("clone")
    native public Fog Clone();
    public Fog(double hex, double near){}
    public Fog(double hex){}
    protected Fog(){}
}

