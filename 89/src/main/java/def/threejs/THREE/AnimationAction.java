package def.threejs.THREE;
public class AnimationAction extends def.js.Object {
    public Boolean loop;
    public double time;
    public double timeScale;
    public double weight;
    public double repetitions;
    public Boolean paused;
    public Boolean enabled;
    public Boolean clampWhenFinished;
    public Boolean zeroSlopeAtStart;
    public Boolean zeroSlopeAtEnd;
    native public AnimationAction play();
    native public AnimationAction stop();
    native public AnimationAction reset();
    native public Boolean isRunning();
    native public AnimationAction startAt(double time);
    native public AnimationAction setLoop(AnimationActionLoopStyles mode, double repetitions);
    native public AnimationAction setEffectiveWeight(double weight);
    native public double getEffectiveWeight();
    native public AnimationAction fadeIn(double duration);
    native public AnimationAction fadeOut(double duration);
    native public AnimationAction crossFadeFrom(AnimationAction fadeOutAction, double duration, Boolean warp);
    native public AnimationAction crossFadeTo(AnimationAction fadeInAction, double duration, Boolean warp);
    native public AnimationAction stopFading();
    native public AnimationAction setEffectiveTimeScale(double timeScale);
    native public double getEffectiveTimeScale();
    native public AnimationAction setDuration(double duration);
    native public AnimationAction syncWith(AnimationAction action);
    native public AnimationAction halt(double duration);
    native public AnimationAction warp(double statTimeScale, double endTimeScale, double duration);
    native public AnimationAction stopWarping();
    native public AnimationMixer getMixer();
    native public AnimationClip getClip();
    native public Object getRoot();
}

