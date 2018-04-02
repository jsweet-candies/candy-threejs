package def.threejs.THREE;
public class PointLightHelper extends Object3D {
    public PointLightHelper(Light light, double sphereSize){}
    public Light light;
    native public void dispose();
    native public void update();
    protected PointLightHelper(){}
}

