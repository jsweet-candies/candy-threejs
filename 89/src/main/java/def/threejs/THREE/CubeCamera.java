package def.threejs.THREE;
public class CubeCamera extends Object3D {
    public CubeCamera(double near, double far, double cubeResolution){}
    public WebGLRenderTargetCube renderTarget;
    /**
     * @deprecated Use {@link CubeCamera#update .update()} instead
     */
    native public void updateCubeMap(Renderer renderer, Scene scene);
    native public void update(Renderer renderer, Scene scene);
    public CubeCamera(double near, double far){}
    public CubeCamera(double near){}
    public CubeCamera(){}
}

