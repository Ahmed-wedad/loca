package com.oga.back_end.agence;

import java.util.Date;

import com.oga.back_end.Address;

public class Agence {
 Integer id,CodeAgence,Num_tel;
 String website,description,nom_agence,papier_patente;
 Boolean  statusverif,statusBan;
 Date date_creation;
Address address;
Personnel[] personnels;

}
