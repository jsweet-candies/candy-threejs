package def.threejs.THREE;
import def.js.Function;
public class ImmediateRenderObject extends Object3D {
    public ImmediateRenderObject(Material material){}
    public Material material;
    native public void render(Function renderCallback);
    protected ImmediateRenderObject(){}
}

