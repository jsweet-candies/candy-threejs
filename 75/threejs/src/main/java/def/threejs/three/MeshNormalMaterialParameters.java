package def.threejs.three;
@jsweet.lang.Interface
public abstract class MeshNormalMaterialParameters extends MaterialParameters {
    /** Render geometry as wireframe. Default is false (i.e. render as smooth shaded). */
    @jsweet.lang.Optional
    public Boolean wireframe;
    /** Controls wireframe thickness. Default is 1. */
    @jsweet.lang.Optional
    public double wireframeLinewidth;
    @jsweet.lang.Optional
    public Boolean morphTargets;
}

