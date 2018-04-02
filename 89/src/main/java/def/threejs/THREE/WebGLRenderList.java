package def.threejs.THREE;
import def.js.Array;
public class WebGLRenderList extends def.js.Object {
    public Array<RenderItem> opaque;
    public Array<?> transparent;
    native public void init();
    native public void push(Object3D object, Geometry geometry, Material material, double z, Group group);
    native public void sort();
    native public void push(Object3D object, BufferGeometry geometry, Material material, double z, Group group);
}

