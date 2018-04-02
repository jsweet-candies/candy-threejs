package def.threejs.THREE;
import def.js.Array;
public class OutlinePass extends def.js.Object {
    public OutlinePass(Vector2 size, Scene scene, Camera camer, Array<Object3D> selectedObjects){}
    public Array<Object3D> selectedObjects;
    public Camera renderCamera;
    public Color visibleEdgeColor;
    public Color hiddenEdgeColor;
    public double edgeGlow;
    public Boolean usePatternTexture;
    public double edgeThickness;
    public double edgeStrength;
    public double downSampleRatio;
    public double pulsePeriod;
    public Vector2 resolution;
    public OutlinePass(Vector2 size, Scene scene, Camera camer){}
    public OutlinePass(Vector2 size, Scene scene, Camera camer, Object3D[] selectedObjects){}
    protected OutlinePass(){}
}

