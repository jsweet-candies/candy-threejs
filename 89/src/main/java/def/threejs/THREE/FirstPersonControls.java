package def.threejs.THREE;
import def.dom.HTMLDocument;
import def.dom.HTMLElement;
import def.dom.HTMLCanvasElement;
public class FirstPersonControls extends def.js.Object {
    public FirstPersonControls(Camera object, HTMLElement domElement){}
    public Object3D object;
    public Vector3 target;
    public jsweet.util.union.Union<HTMLCanvasElement,HTMLDocument> domElement;
    public Boolean enabled;
    public double movementSpeed;
    public double lookSpeed;
    public Boolean noFly;
    public Boolean lookVertical;
    public Boolean autoForward;
    public Boolean activeLook;
    public Boolean heightSpeed;
    public double heightCoef;
    public double heightMin;
    public double heightMax;
    public Boolean constrainVertical;
    public double verticalMin;
    public double verticalMax;
    public double autoSpeedFactor;
    public double mouseX;
    public double mouseY;
    public double lat;
    public double lon;
    public double phi;
    public double theta;
    public Boolean moveForward;
    public Boolean moveBackward;
    public Boolean moveLeft;
    public Boolean moveRight;
    public Boolean freeze;
    public Boolean mouseDragOn;
    native public void update(double delta);
    native public void dispose();
    public FirstPersonControls(Camera object){}
    protected FirstPersonControls(){}
}

