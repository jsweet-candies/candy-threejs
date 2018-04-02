package def.threejs.THREE;
import def.dom.HTMLElement;
public class EditorControls extends EventDispatcher {
    public EditorControls(Camera object, HTMLElement domElement){}
    public Boolean enabled;
    public Vector3 center;
    native public void focus(Object3D target, Boolean frame);
    native public void pan(Vector3 delta);
    native public void zoom(Vector3 delta);
    native public void rotate(Vector3 delta);
    native public void dispose();
    public EditorControls(Camera object){}
    protected EditorControls(){}
}

