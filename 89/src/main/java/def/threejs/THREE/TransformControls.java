package def.threejs.THREE;
import def.dom.HTMLElement;
public class TransformControls extends Object3D {
    public TransformControls(Camera object, HTMLElement domElement){}
    public Object3D object;
    native public void update();
    native public void detach();
    native public void attach(Object3D object);
    native public String getMode();
    native public void setMode(String mode);
    native public void setSnap(Object snap);
    native public void setSize(double size);
    native public void setSpace(String space);
    public TransformControls(Camera object){}
    protected TransformControls(){}
}

