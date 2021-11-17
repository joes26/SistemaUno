export class Constants {

  static Core = class {
    public static get MensajeErrorGenerico(): string { return "Error de acceso a la aplicación."; };
    public static get Titulo(): string { return "Sistema Modular"; };
    public static get DefaultPagesSize(): number { return 10; };

    /*static Sociedad = class {
      public static get Ferreyros(): string { return "FE05"; };
      public static get NuevoFerreyros(): string { return "2000"; };
      public static get Ferrycorp(): string { return "FE01"; };
    }*/

    static Usuario = class {
      public static get Token(): string { return "app_token"; };
    }

    static MessageType = class {
      public static get Success(): string { return "success"; };
      public static get Warning(): string { return "warning"; };
      public static get Error(): string { return "error"; };
    }

    static HttpResponse = class {
      public static get Success(): number { return 0; };
      public static get WorkerExternalNotFound(): number { return 1; };
      public static get WorkerInternalNotFound(): number { return 2; };
      public static get UsuarioSociedadMultiple(): number { return 6; };
      public static get CampoRequerido(): number { return 1; };
      public static get ErrorServicioWorkShop(): number { return 2; };
      public static get OTTallerRegistrado(): number { return 10; };
    }
  }

  static Example = class {
    public static get DefaultName(): string { return "Test"; };
  }

  static TipoRuta = class {
    public static get Recepcion(): string { return 'TIPRUTREC'; };
    public static get Despacho(): string { return 'TIPRUTDES'; };
    public static get Almacen(): string { return 'TIPRUTALM'; };
    public static get Taller(): string { return 'TIPRUTTAL'; };
  }

  static DateFormats = class {
    public static get FormatddMMyyyyHHmm(): string { return "dd/MM/yyyy HH:mm"; };
    public static get FormatddMMyyyyHHmmss(): string { return "dd/MM/yyyy HH:mm:ss"; };
    public static get FormatyyyyMMddTHHmmss(): string { return "yyyy-MM-ddTHH:mm:ss"; };
    public static get FormatddMMyyyy(): string { return "dd/MM/yyyy"; };
    public static get FormatDDMMYYYY(): string { return "DD/MM/YYYY"; };
    public static get FormatNameddMMyyyyHHmm(): string { return "dd MM yyyy HH mm ss"; };
  }

  static FormFilters = class {
    public static get Taller(): string { return "form-filters-taller"; };
    public static get Recepcion(): string { return "form-filters-recepcion"; };
    public static get OperacionMasiva(): string { return "form-filters-operacion-masiva"; };
  }
  
  static TipoOF = class {
    public static get ZRET(): string { return 'ZRET'; };
    public static get ZCRP(): string { return 'ZCRP'; };
  }
}
