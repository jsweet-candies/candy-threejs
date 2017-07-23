package def.threejs.three;
public class DirectionalLightHelper extends Object3D {
    public DirectionalLightHelper(Light light, double size){}
    public Light light;
    public Line lightPlane;
    public Line targetLine;
    native public void dispose();
    native public void update();
    public DirectionalLightHelper(Light light){}
    protected DirectionalLightHelper(){}
}

