package def.threejs.THREE;
public class AnimationMixer extends EventDispatcher {
    public AnimationMixer(Object root){}
    public double time;
    public double timeScale;
    native public AnimationAction clipAction(AnimationClip clip, Object root);
    native public AnimationAction existingAction(AnimationClip clip, Object root);
    native public AnimationMixer stopAllAction();
    native public AnimationMixer update(double deltaTime);
    native public Object getRoot();
    native public void uncacheClip(AnimationClip clip);
    native public void uncacheRoot(Object root);
    native public void uncacheAction(AnimationClip clip, Object root);
    native public AnimationAction clipAction(AnimationClip clip);
    native public AnimationAction existingAction(AnimationClip clip);
    native public void uncacheAction(AnimationClip clip);
    protected AnimationMixer(){}
}

