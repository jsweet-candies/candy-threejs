package def.threejs.three;
public class Sprite extends Object3D {
    public Sprite(Material material){}
    public BufferGeometry geometry;
    public SpriteMaterial material;
    native public void raycast(Raycaster raycaster, Object intersects);
    @jsweet.lang.Name("clone")
    native public Sprite Clone();
    native public Sprite copy(Sprite source);
    public Sprite(){}
}

