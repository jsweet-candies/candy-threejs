package def.threejs.three;
import def.dom.GainNode;
import def.dom.AudioContext;
import def.dom.AudioBufferSourceNode;
public class Audio extends Object3D {
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
    public Object filter;
    native public GainNode getOutput();
    native public Audio load(String file);
    native public Audio setNodeSource(AudioBufferSourceNode audioNode);
    native public Audio setBuffer(AudioBuffer audioBuffer);
    native public void play();
    native public void pause();
    native public void stop();
    native public void connect();
    native public void disconnect();
    native public void setFilter(Object value);
    native public Object getFilter();
    native public void setPlaybackRate(double value);
    native public double getPlaybackRate();
    native public void onEnded();
    native public void setLoop(Boolean value);
    native public Boolean getLoop();
    native public void setVolume(double value);
    native public double getVolume();
    protected Audio(){}
}

