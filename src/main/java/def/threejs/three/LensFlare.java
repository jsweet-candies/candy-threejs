package def.threejs.three;
public class LensFlare extends Object3D {
    public LensFlare(Texture texture, double size, double distance, Blending blending, Color color){}
    public LensFlareProperty[] lensFlares;
    public Vector3 positionScreen;
    public java.util.function.Consumer<LensFlare> customUpdateCallback;
    native public void add(Object3D object);
    native public void add(Texture texture, double size, double distance, Blending blending, Color color);
    native public void updateLensFlares();
    @jsweet.lang.Name("clone")
    native public LensFlare Clone();
    native public LensFlare copy(LensFlare source);
    public LensFlare(Texture texture, double size, double distance, Blending blending){}
    public LensFlare(Texture texture, double size, double distance){}
    public LensFlare(Texture texture, double size){}
    public LensFlare(Texture texture){}
    public LensFlare(){}
    native public void add(Texture texture, double size, double distance, Blending blending);
    native public void add(Texture texture, double size, double distance);
    native public void add(Texture texture, double size);
    native public void add(Texture texture);
}

