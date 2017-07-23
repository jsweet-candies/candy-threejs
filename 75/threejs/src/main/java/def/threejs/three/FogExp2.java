package def.threejs.three;
/**
     * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
     */
public class FogExp2 extends IFog {
    public FogExp2(double hex, double density){}
    public String name;
    public Color color;
    /**
         * Defines how fast the fog will grow dense.
         * Default is 0.00025.
         */
    public double density;
    @jsweet.lang.Name("clone")
    native public FogExp2 Clone();
    public FogExp2(double hex){}
    public FogExp2(String hex, double density){}
    public FogExp2(String hex){}
    protected FogExp2(){}
}

