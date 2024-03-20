package com.joules.backend.Imagenes;

import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import com.joules.backend.Formularios.Formulario;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Imagen {
    @Id
    @GeneratedValue
    private String nombreImagen;

    @ManyToOne
    @JoinColumn(name = "numIdentificacion")
    private Formulario formulario;

    @Basic
    private Date fecha;

}
