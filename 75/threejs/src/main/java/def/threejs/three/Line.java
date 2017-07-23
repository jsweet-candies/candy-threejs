package def.threejs.three;
public class Line extends Object3D {
    public Line(Geometry geometry, LineDashedMaterial material, double mode){}
    public jsweet.util.union.Union<Geometry,BufferGeometry> geometry;
    public Material material;
    native public void raycast(Raycaster raycaster, Object intersects);
    @jsweet.lang.Name("clone")
    native public Line Clone();
    native public Line copy(Line source);
    public Line(Geometry geometry, LineDashedMaterial material){}
    public Line(Geometry geometry){}
    public Line(){}
    public Line(Geometry geometry, LineBasicMaterial material, double mode){}
    public Line(BufferGeometry geometry, ShaderMaterial material, double mode){}
    public Line(BufferGeometry geometry, LineDashedMaterial material, double mode){}
    public Line(BufferGeometry geometry, LineBasicMaterial material, double mode){}
    public Line(Geometry geometry, ShaderMaterial material, double mode){}
    public Line(Geometry geometry, ShaderMaterial material){}
    public Line(BufferGeometry geometry, LineBasicMaterial material){}
    public Line(BufferGeometry geometry, LineDashedMaterial material){}
    public Line(BufferGeometry geometry, ShaderMaterial material){}
    public Line(Geometry geometry, LineBasicMaterial material){}
    public Line(BufferGeometry geometry){}
}

