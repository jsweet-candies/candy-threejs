package def.threejs.THREE;
public class Spherical extends def.js.Object {
    public Spherical(double radius, double phi, double theta){}
    public double radius;
    public double phi;
    public double theta;
    native public Spherical set(double radius, double phi, double theta);
    @jsweet.lang.Name("clone")
    native public Spherical Clone();
    native public Spherical copy(Spherical other);
    native public void makeSafe();
    native public Spherical setFromVector3(Vector3 vec3);
    public Spherical(double radius, double phi){}
    public Spherical(double radius){}
    public Spherical(){}
}

