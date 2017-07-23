package def.threejs.three;
public class HemisphereLightHelper extends Object3D {
    public HemisphereLightHelper(Light light, double sphereSize){}
    public Light light;
    public Color[] colors;
    public Mesh lightSphere;
    native public void dispose();
    native public void update();
    protected HemisphereLightHelper(){}
}

