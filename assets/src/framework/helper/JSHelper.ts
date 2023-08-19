import MusicManager from "../manager/MusicManager";

class JSHelper {
    static playClickEffect(){
        MusicManager.playEffect("click");
    }
    static playEffect(eName,loop = false,isSign = false){
        MusicManager.playEffect(eName,loop,isSign);
    }
    static stopEffect(eName){
        MusicManager.stopEffect(eName);
    }
    static playMisuc(mName){
        MusicManager.playMusic(mName,true);
    }
    static setPauseMusic(){
        MusicManager.setPauseMusic();
    }
    static setResumeMusic(){
        MusicManager.setResumeMusic();
    }
    static getLastMusic(){
        return MusicManager.getLastMusic();
    }
};
export default JSHelper;