package def.threejs.THREE;
public class Cylindrical extends def.js.Object {
    public Cylindrical(double radius, double theta, double y){}
    public double radius;
    public double theta;
    public double y;
    @jsweet.lang.Name("clone")
    native public Cylindrical Clone();
    native public Cylindrical copy(Cylindrical other);
    native public Cylindrical set(double radius, double theta, double y);
    native public Cylindrical setFromVector3(Vector3 vec3);
    public Cylindrical(double radius, double theta){}
    public Cylindrical(double radius){}
    public Cylindrical(){}
}

