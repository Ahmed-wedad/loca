package com.oga.back_end.particulier;

import com.oga.back_end.user.User;

public class Particulier extends User {
int tel;
String photoProfile;
boolean statusverif;
    public Particulier(String nom, String prenom, String email, String password) {
        super();
    }

    public String getPhotoProfile() {
        return photoProfile;
    }

    public void setPhotoProfile(String photoProfile) {
        this.photoProfile = photoProfile;
    }

    public int getTel() {
        return tel;
    }

    public void setStatusverif(boolean statusverif) {
        this.statusverif = statusverif;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

}
