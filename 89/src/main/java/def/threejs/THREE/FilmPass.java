package def.threejs.THREE;
public class FilmPass extends Pass {
    public FilmPass(double noiseIntensity, double scanlinesIntensity, double scanlinesCount, Boolean grayscale){}
    public Scene scene;
    public Camera camera;
    public IUniform uniforms;
    public Material material;
    public Mesh quad;
    protected FilmPass(){}
}

