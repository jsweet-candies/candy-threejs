package def.threejs.THREE;
public class RenderableFace extends def.js.Object {
    public RenderableFace(){}
    public double id;
    public RenderableVertex v1;
    public RenderableVertex v2;
    public RenderableVertex v3;
    public Vector3 normalModel;
    public Vector3[] vertexNormalsModel;
    public double vertexNormalsLength;
    public Color color;
    public Material material;
    public Vector2[][] uvs;
    public double z;
}

