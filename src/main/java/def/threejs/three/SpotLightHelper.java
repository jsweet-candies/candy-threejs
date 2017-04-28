package def.threejs.three;
public class SpotLightHelper extends Object3D {
    public SpotLightHelper(Light light, double sphereSize, double arrowLength){}
    public Light light;
    public Mesh cone;
    native public void dispose();
    native public void update();
    protected SpotLightHelper(){}
}

