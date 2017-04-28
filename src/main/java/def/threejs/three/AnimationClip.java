package def.threejs.three;
public class AnimationClip extends def.js.Object {
    public AnimationClip(String name, double duration, KeyframeTrack[] tracks){}
    public String name;
    public KeyframeTrack[] tracks;
    public double duration;
    public Object[] results;
    native public void resetDuration();
    native public AnimationClip trim();
    native public AnimationClip optimize();
    native public static AnimationClip CreateFromMorphTargetSequence(String name, MorphTarget[] morphTargetSequence, double fps);
    native public static AnimationClip findByName(AnimationClip clipArray, String name);
    native public static AnimationClip[] CreateClipsFromMorphTargetSequences(MorphTarget[] morphTargets, double fps);
    native public static AnimationClip parse(Object json);
    native public static AnimationClip parseAnimation(Object animation, Bone[] bones, String nodeName);
    native public static Object toJSON();
    public AnimationClip(String name, double duration){}
    public AnimationClip(String name){}
    public AnimationClip(){}
}

