package com.oga.back_end.driverlicence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.time.LocalDate;
@JsonIgnoreProperties(ignoreUnknown = true)
public class Result {
    int id;
    private final String  url;
    private String prenom;
    private String nom;
    private String country;
    private String gouvernorat;
    private LocalDate dob,exp;
    private String licence;

    public Result(String url, String nom , String prenom, String country, String gouvernorat,
                  String licence,
                  LocalDate dob,
                  LocalDate exp
                         ) {
        this.url = url;
        this.nom = nom;
        this.prenom = prenom;
        this.country = country;
        this.gouvernorat = gouvernorat;
        this.licence = licence;
        this.dob = dob;
        this.exp = exp;
    }

    public Result(String url) {
        this.url = url;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getUrl() {
        return url;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGouvernorat() {
        return gouvernorat;
    }

    public void setGouvernorat(String gouvernorat) {
        this.gouvernorat = gouvernorat;
    }

    public LocalDate getExp() {
        return exp;
    }

    public void setExp(LocalDate exp) {
        this.exp = exp;
    }

    public String getLicence() {
        return licence;
    }

    public void setLicence(String licence) {
        this.licence = licence;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "DriverLicence{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", prenom='" + prenom + '\'' +
                ", nom='" + nom + '\'' +
                ", country='" + country + '\'' +
                ", gouvernorat='" + gouvernorat + '\'' +
                ", dob=" + dob +
                ", exp=" + exp +
                ", licence=" + licence +
                '}';
    }
}