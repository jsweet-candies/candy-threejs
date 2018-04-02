package def.threejs.THREE;
public class RenderableVertex extends def.js.Object {
    public RenderableVertex(){}
    public Vector3 position;
    public Vector3 positionWorld;
    public Vector4 positionScreen;
    public Boolean visible;
    native public void copy(RenderableVertex vertex);
}

