package def.threejs.three;
public class CubeCamera extends Object3D {
    public CubeCamera(double near, double far, double cubeResolution){}
    public WebGLRenderTargetCube renderTarget;
    native public void updateCubeMap(Renderer renderer, Scene scene);
    public CubeCamera(double near, double far){}
    public CubeCamera(double near){}
    public CubeCamera(){}
}

