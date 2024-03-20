package com.joules.backend.Formularios;

import jakarta.persistence.Basic;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.joules.backend.Imagenes.Imagen;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table (name = "formulario")
public class Formulario {
    @Id
    @Column (name = "numIdentificacion")
    private Integer numIdentificacion;

    @Basic
    private String nombres;
    private String apellidos;
    private String tipoId;
    private Integer estadoCivil;
    private Date fechaNacimiento;
    private Integer numBeneficiarios;
    private Date fechaIngreso;

    @OneToMany(mappedBy = "formulario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Imagen> imagenes = new HashSet<>();
}
