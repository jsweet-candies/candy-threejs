package def.threejs;
import def.dom.GainNode;
import def.threejs.THREE.AudioLoader;
import def.dom.AudioContext;
import def.dom.AudioBufferSourceNode;
@jsweet.lang.Mixin(target=def.dom.Audio.class)
public class Audio extends def.dom.Audio {
    public Audio(AudioListener listener){}
    public String type;
    public AudioContext context;
    public AudioBufferSourceNode source;
    public GainNode gain;
    public Boolean autoplay;
    public double startTime;
    public double playbackRate;
    public Boolean hasPlaybackControl;
    public Boolean isPlaying;
    public String sourceType;
    public Object[] filters;
    native public GainNode getOutput();
    native public Audio setNodeSource(AudioBufferSourceNode audioNode);
    native public Audio setBuffer(AudioBuffer audioBuffer);
    native public Audio play();
    native public Audio pause();
    native public Audio stop();
    native public Audio connect();
    native public Audio disconnect();
    native public Object[] getFilters();
    native public Audio setFilter(Object[] value);
    native public Object getFilter();
    native public Audio setFilter(Object filter);
    native public Audio setPlaybackRate(double value);
    native public double getPlaybackRate();
    native public void onEnded();
    native public Boolean getLoop();
    native public void setLoop(Boolean value);
    native public double getVolume();
    native public Audio setVolume(double value);
    /**
     * @deprecated Use {@link AudioLoader} instead.
     */
    native public Audio load(String file);
    protected Audio(){}
}

