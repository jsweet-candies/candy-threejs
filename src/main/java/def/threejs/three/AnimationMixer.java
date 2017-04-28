package def.threejs.three;
public class AnimationMixer extends def.js.Object {
    public AnimationMixer(Object root){}
    public double time;
    public double timeScale;
    native public Object clipAction(AnimationClip clip, Object root);
    native public Object existingAction(AnimationClip clip, Object root);
    native public AnimationMixer stopAllAction(AnimationClip clip, Object root);
    native public AnimationMixer update(double deltaTime);
    native public Object getRoot();
    native public void uncacheClip(AnimationClip clip);
    native public void uncacheRoot(Object root);
    native public void uncazcheAction(AnimationClip clip, Object root);
    native public Object clipAction(AnimationClip clip);
    native public Object existingAction(AnimationClip clip);
    native public AnimationMixer stopAllAction(AnimationClip clip);
    native public void uncazcheAction(AnimationClip clip);
    protected AnimationMixer(){}
}

