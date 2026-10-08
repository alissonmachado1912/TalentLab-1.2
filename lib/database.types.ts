// Contrato das tabelas criadas em supabase/migrations/20260928000000_initial.sql.
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      Empresa: {
        Row: {
          ownerId: string;
          id: string;
          razaoSocial: string;
          nomeFantasia: string | null;
          cnpj: string;
          cidadeUF: string | null;
          createdAt: string;
          updatedAt: string;
        };
        Insert: {
          ownerId?: string;
          id?: string;
          razaoSocial: string;
          nomeFantasia?: string | null;
          cnpj: string;
          cidadeUF?: string | null;
          createdAt?: string;
          updatedAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Empresa"]["Insert"]>;
        Relationships: [

        ];
      };
      Setor: {
        Row: {
          id: string;
          nome: string;
          empresaId: string;
        };
        Insert: {
          id?: string;
          nome: string;
          empresaId: string;
        };
        Update: Partial<Database["public"]["Tables"]["Setor"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "Setor_empresaId_fkey"; columns: ["empresaId"]; isOneToOne: false; referencedRelation: "Empresa"; referencedColumns: ["id"] }
        ];
      };
      Cargo: {
        Row: {
          ownerId: string;
          id: string;
          codigo: string;
          titulo: string;
          salarioBase: number;
          jornadaMensal: number;
          adicionalInsalubridade: boolean;
          adicionalPericulosidade: boolean;
        };
        Insert: {
          ownerId?: string;
          id?: string;
          codigo: string;
          titulo: string;
          salarioBase: number;
          jornadaMensal: number;
          adicionalInsalubridade?: boolean;
          adicionalPericulosidade?: boolean;
        };
        Update: Partial<Database["public"]["Tables"]["Cargo"]["Insert"]>;
        Relationships: [

        ];
      };
      Funcionario: {
        Row: {
          ownerId: string;
          id: string;
          codigo: string;
          empresaId: string;
          nome: string;
          cpf: string;
          observacoes: string;
          pcd: boolean | null;
          sexo: string | null;
          dataNascimento: string | null;
          cargoId: string;
          salarioBase: number;
          dependentes: number;
          dataAdmissao: string;
          createdAt: string;
          updatedAt: string;
        };
        Insert: {
          ownerId?: string;
          id?: string;
          codigo: string;
          empresaId: string;
          nome: string;
          cpf: string;
          observacoes?: string;
          pcd?: boolean | null;
          sexo?: string | null;
          dataNascimento?: string | null;
          cargoId: string;
          salarioBase: number;
          dependentes?: number;
          dataAdmissao: string;
          createdAt?: string;
          updatedAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Funcionario"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "Funcionario_empresaId_fkey"; columns: ["empresaId"]; isOneToOne: false; referencedRelation: "Empresa"; referencedColumns: ["id"] },
          { foreignKeyName: "Funcionario_cargoId_fkey"; columns: ["cargoId"]; isOneToOne: false; referencedRelation: "Cargo"; referencedColumns: ["id"] }
        ];
      };
      LancamentoHoraExtra: {
        Row: { id: string; funcionarioId: string; inicio: string; fim: string; folhaId: string; itemFolhaId: string; minutos: number; createdAt: string };
        Insert: { id?: string; funcionarioId: string; inicio: string; fim: string; folhaId: string; itemFolhaId: string; minutos: number; createdAt?: string };
        Update: Partial<Database['public']['Tables']['LancamentoHoraExtra']['Insert']>;
        Relationships: [];
      };
      LancamentoHoraExtraPonto: {
        Row: { pontoId: string; lancamentoId: string; minutos: number };
        Insert: { pontoId: string; lancamentoId: string; minutos: number };
        Update: Partial<Database['public']['Tables']['LancamentoHoraExtraPonto']['Insert']>;
        Relationships: [];
      };
      RegistroPonto: {
        Row: {
          id: string;
          funcionarioId: string;
          data: string;
          entrada: string;
          saidaAlmoco: string;
          retornoAlmoco: string;
          saida: string;
          horasExtras: string;
          status: "REGULAR" | "ATRASO";
          createdAt: string;
        };
        Insert: {
          id?: string;
          funcionarioId: string;
          data: string;
          entrada: string;
          saidaAlmoco: string;
          retornoAlmoco: string;
          saida: string;
          horasExtras?: string;
          status?: "REGULAR" | "ATRASO";
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["RegistroPonto"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "RegistroPonto_funcionarioId_fkey"; columns: ["funcionarioId"]; isOneToOne: false; referencedRelation: "Funcionario"; referencedColumns: ["id"] }
        ];
      };
      RegistroASO: {
        Row: {
          id: string;
          funcionarioId: string;
          tipo: string;
          medico: string;
          data: string;
          resultado: "APTO" | "INAPTO";
          createdAt: string;
        };
        Insert: {
          id?: string;
          funcionarioId: string;
          tipo: string;
          medico: string;
          data: string;
          resultado?: "APTO" | "INAPTO";
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["RegistroASO"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "RegistroASO_funcionarioId_fkey"; columns: ["funcionarioId"]; isOneToOne: false; referencedRelation: "Funcionario"; referencedColumns: ["id"] }
        ];
      };
      EventoFolha: {
        Row: {
          codigo: string;
          nome: string;
          tipo: "PROVENTO" | "DESCONTO";
          percentualFixa: number | null;
          incideINSS: boolean;
          incideIRRF: boolean;
          incideFGTS: boolean;
          descricaoDidatica: string;
        };
        Insert: {
          codigo: string;
          nome: string;
          tipo: "PROVENTO" | "DESCONTO";
          percentualFixa?: number | null;
          incideINSS?: boolean;
          incideIRRF?: boolean;
          incideFGTS?: boolean;
          descricaoDidatica: string;
        };
        Update: Partial<Database["public"]["Tables"]["EventoFolha"]["Insert"]>;
        Relationships: [

        ];
      };
      FolhaPagamento: {
        Row: {
          id: string;
          funcionarioId: string;
          mesReferencia: string;
          totalProventos: number;
          totalDescontos: number;
          salarioLiquido: number;
          fgtsDoMes: number;
          createdAt: string;
        };
        Insert: {
          id?: string;
          funcionarioId: string;
          mesReferencia: string;
          totalProventos: number;
          totalDescontos: number;
          salarioLiquido: number;
          fgtsDoMes: number;
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["FolhaPagamento"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "FolhaPagamento_funcionarioId_fkey"; columns: ["funcionarioId"]; isOneToOne: false; referencedRelation: "Funcionario"; referencedColumns: ["id"] }
        ];
      };
      ItemFolha: {
        Row: {
          id: string;
          folhaId: string;
          codigoEvento: string;
          tipo: "PROVENTO" | "DESCONTO";
          referencia: string;
          valorCalculado: number;
          memoriaCalculo: string;
        };
        Insert: {
          id?: string;
          folhaId: string;
          codigoEvento: string;
          tipo: "PROVENTO" | "DESCONTO";
          referencia: string;
          valorCalculado: number;
          memoriaCalculo: string;
        };
        Update: Partial<Database["public"]["Tables"]["ItemFolha"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "ItemFolha_folhaId_fkey"; columns: ["folhaId"]; isOneToOne: false; referencedRelation: "FolhaPagamento"; referencedColumns: ["id"] },
          { foreignKeyName: "ItemFolha_codigoEvento_fkey"; columns: ["codigoEvento"]; isOneToOne: false; referencedRelation: "EventoFolha"; referencedColumns: ["codigo"] }
        ];
      };
      Turma: {
        Row: {
          id: string;
          nome: string;
          createdAt: string;
        };
        Insert: {
          id?: string;
          nome: string;
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Turma"]["Insert"]>;
        Relationships: [

        ];
      };
      Aluno: {
        Row: {
          id: string;
          nome: string;
          matricula: string;
          senhaHash: string | null;
          turmaId: string;
          createdAt: string;
        };
        Insert: {
          id?: string;
          nome: string;
          matricula: string;
          senhaHash?: string | null;
          turmaId: string;
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Aluno"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "Aluno_turmaId_fkey"; columns: ["turmaId"]; isOneToOne: false; referencedRelation: "Turma"; referencedColumns: ["id"] }
        ];
      };
      AtividadeConclusao: {
        Row: {
          id: string;
          activityId: string;
          alunoId: string;
          concluidaEm: string;
        };
        Insert: {
          id?: string;
          activityId: string;
          alunoId: string;
          concluidaEm?: string;
        };
        Update: Partial<Database["public"]["Tables"]["AtividadeConclusao"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "AtividadeConclusao_activityId_fkey"; columns: ["activityId"]; isOneToOne: false; referencedRelation: "Activity"; referencedColumns: ["id"] },
          { foreignKeyName: "AtividadeConclusao_alunoId_fkey"; columns: ["alunoId"]; isOneToOne: false; referencedRelation: "Aluno"; referencedColumns: ["id"] }
        ];
      };
      Notificacao: {
        Row: {
          id: string;
          mensagem: string;
          tipo: "NOVA_ATIVIDADE" | "ATIVIDADE_CONCLUIDA";
          destino: "PROFESSOR" | "ALUNO";
          alunoId: string | null;
          lida: boolean;
          createdAt: string;
        };
        Insert: {
          id?: string;
          mensagem: string;
          tipo: "NOVA_ATIVIDADE" | "ATIVIDADE_CONCLUIDA";
          destino: "PROFESSOR" | "ALUNO";
          alunoId?: string | null;
          lida?: boolean;
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Notificacao"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "Notificacao_alunoId_fkey"; columns: ["alunoId"]; isOneToOne: false; referencedRelation: "Aluno"; referencedColumns: ["id"] }
        ];
      };
      Activity: {
        Row: {
          id: string;
          type: "pratica" | "simulacao" | "documento" | "calculo";
          title: string;
          statement: string;
          instructions: string;
          mechanism: "empresas" | "cargos" | "funcionarios" | "ponto" | "aso" | "folha" | "custos" | "contratacao";
          className: string;
          createdBy: string;
          turmaId: string | null;
          createdAt: string;
        };
        Insert: {
          id?: string;
          type: "pratica" | "simulacao" | "documento" | "calculo";
          title: string;
          statement: string;
          instructions: string;
          mechanism: "empresas" | "cargos" | "funcionarios" | "ponto" | "aso" | "folha" | "custos" | "contratacao";
          className: string;
          createdBy: string;
          turmaId?: string | null;
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Activity"]["Insert"]>;
        Relationships: [
          { foreignKeyName: "Activity_turmaId_fkey"; columns: ["turmaId"]; isOneToOne: false; referencedRelation: "Turma"; referencedColumns: ["id"] }
        ];
      };
      Professor: {
        Row: {
          id: string;
          nome: string;
          email: string;
          senhaHash: string;
        };
        Insert: {
          id?: string;
          nome: string;
          email: string;
          senhaHash: string;
        };
        Update: Partial<Database["public"]["Tables"]["Professor"]["Insert"]>;
        Relationships: [

        ];
      };
      Sessao: {
        Row: {
          tokenHash: string;
          userId: string;
          role: string;
          expiresAt: string;
        };
        Insert: {
          tokenHash: string;
          userId: string;
          role: string;
          expiresAt: string;
        };
        Update: Partial<Database["public"]["Tables"]["Sessao"]["Insert"]>;
        Relationships: [

        ];
      };
      Trabalho: {
        Row: {
          id: string;
          alunoId: string;
          tipo: string;
          dados: Json;
          createdAt: string;
        };
        Insert: {
          id?: string;
          alunoId: string;
          tipo: string;
          dados: Json;
          createdAt?: string;
        };
        Update: Partial<Database["public"]["Tables"]["Trabalho"]["Insert"]>;
        Relationships: [

        ];
      };
    };
    Views: { [_ in never]: never };
    Functions: { confirmar_horas_extras: { Args: { p_owner: string; p_funcionario: string; p_inicio: string; p_salario: number; p_pontos: Json }; Returns: Json } };
    Enums: {
      TipoEvento: "PROVENTO" | "DESCONTO";
      TipoAtividade: "pratica" | "simulacao" | "documento" | "calculo";
      MecanismoAtividade: "empresas" | "cargos" | "funcionarios" | "ponto" | "aso" | "folha" | "custos" | "contratacao";
      StatusPonto: "REGULAR" | "ATRASO";
      ResultadoASO: "APTO" | "INAPTO";
      TipoNotificacao: "NOVA_ATIVIDADE" | "ATIVIDADE_CONCLUIDA";
      DestinoNotificacao: "PROFESSOR" | "ALUNO";
    };
    CompositeTypes: { [_ in never]: never };
  };
};
