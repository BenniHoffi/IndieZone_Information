export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      newsletter_emails: {
        Row: {
          email: string
        }
        Insert: {
          email: string
        }
        Update: {
          email?: string
        }
      }
      Products: {
        Row: {
          currency: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          price: number
          shop_id: string
          tags: string[] | null
        }
        Insert: {
          currency: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          price: number
          shop_id: string
          tags?: string[] | null
        }
        Update: {
          currency?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          shop_id?: string
          tags?: string[] | null
        }
      }
      Shopowners: {
        Row: {
          id: string
          shopcount: number
        }
        Insert: {
          id: string
          shopcount?: number
        }
        Update: {
          id?: string
          shopcount?: number
        }
      }
      Shops: {
        Row: {
          category: string
          city: string
          description: string | null
          id: string
          name: string
          owner_id: string
          postcode: string
          "street adress": string
        }
        Insert: {
          category: string
          city: string
          description?: string | null
          id?: string
          name: string
          owner_id: string
          postcode: string
          "street adress": string
        }
        Update: {
          category?: string
          city?: string
          description?: string | null
          id?: string
          name?: string
          owner_id?: string
          postcode?: string
          "street adress"?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      _ltree_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      _ltree_gist_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      lca: {
        Args: { "": unknown[] }
        Returns: unknown
      }
      lquery_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      lquery_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      lquery_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      lquery_send: {
        Args: { "": unknown }
        Returns: string
      }
      ltree_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_gist_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_gist_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      ltree_gist_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltree_send: {
        Args: { "": unknown }
        Returns: string
      }
      ltree2text: {
        Args: { "": unknown }
        Returns: string
      }
      ltxtq_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltxtq_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltxtq_recv: {
        Args: { "": unknown }
        Returns: unknown
      }
      ltxtq_send: {
        Args: { "": unknown }
        Returns: string
      }
      nlevel: {
        Args: { "": unknown }
        Returns: number
      }
      text2ltree: {
        Args: { "": string }
        Returns: unknown
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}
