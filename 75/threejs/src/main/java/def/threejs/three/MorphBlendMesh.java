package def.threejs.three;
public class MorphBlendMesh extends Mesh {
    public MorphBlendMesh(Geometry geometry, Material material){}
    public AnimationsMap animationsMap;
    public MorphBlendMeshAnimation[] animationsList;
    native public void createAnimation(String name, double start, double end, double fps);
    native public void autoCreateAnimations(double fps);
    native public void setAnimationDirectionForward(String name);
    native public void setAnimationDirectionBackward(String name);
    native public void setAnimationFPS(String name, double fps);
    native public void setAnimationDuration(String name, double duration);
    native public void setAnimationWeight(String name, double weight);
    native public void setAnimationTime(String name, double time);
    native public double getAnimationTime(String name);
    native public double getAnimationDuration(String name);
    native public void playAnimation(String name);
    native public void stopAnimation(String name);
    native public void update(double delta);
    /** This is an automatically generated object type (see the source definition). */
    @jsweet.lang.ObjectType
    public static class AnimationsMap extends def.js.Object {
        native public MorphBlendMeshAnimation $get(String name);
    }
    protected MorphBlendMesh(){}
}

