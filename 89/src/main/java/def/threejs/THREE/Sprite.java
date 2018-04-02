package def.threejs.THREE;
public class Sprite extends Object3D {
    public Sprite(Material material){}
    public BufferGeometry geometry;
    public SpriteMaterial material;
    native public void raycast(Raycaster raycaster, Object intersects);
    public Sprite(){}
}

